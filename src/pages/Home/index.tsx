import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Word } from '../../@types/word'
import { Definition } from '../../components/Definition'
import { EmptyResults } from '../../components/EmptyResults'
import { ErrorsComponent } from '../../components/ErrorsComponent'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { PlayButton } from '../../components/PlayButton'
import { Synonyms } from '../../components/Synonyms'
import { api } from '../../libs/axios'
import { Separator } from '../../primitives/Separator'
import {
  ContentBox,
  HomeBox,
  Input,
  InputField,
  MeaningsBox,
  PlayerBox,
  SearchButton,
} from './styles'

const querySearchSchema = z.object({
  query: z
    .string()
    .min(3, { message: 'Please enter a word of at least 3 letters.' }),
})

type QuerySearchInput = z.infer<typeof querySearchSchema>

interface ErrorResponseProps {
  title: string
  message: string
  resolution: string
}

export default function Home() {
  const { register, handleSubmit, reset, formState } = useForm<QuerySearchInput>({
    resolver: zodResolver(querySearchSchema),
  })

  const [word, setWord] = useState<Word | null>(null)
  const [errorResponse, setErrorResponse] = useState<ErrorResponseProps | null>(null)

  async function handleGetWordDefinition(data: QuerySearchInput) {
    try {
      const response = await api.get(`/v2/entries/en/${data.query}`)

      setWord(response.data[0])
      reset()
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setErrorResponse(err.response?.data)
      }

      reset()
    }
  }

  return (
    <HomeBox>
      <Header />

      <ContentBox>
        <form onSubmit={handleSubmit(handleGetWordDefinition)}>
          <InputField>
            <Input
              autoFocus
              errors={!!formState.errors.query}
              placeholder="Type here..."
              {...register('query')}
            />
            <span>{formState.errors.query && formState.errors.query.message}</span>
          </InputField>

          <SearchButton type="submit">
            <Search />
          </SearchButton>
        </form>

        {word ? (
          <div>
            <PlayerBox>
              <div>
                <h1>{word?.word}</h1>
                <PlayButton />
              </div>

              {word?.phonetic && <span>{word?.phonetic}</span>}
            </PlayerBox>

            <MeaningsBox>
              <div>
                <em>{word?.meanings[0].partOfSpeech}</em>
                <Separator orientation="horizontal" />
              </div>

              {word?.meanings[0].definitions.slice(0, 8).map((definition) => {
                return (
                  <Definition
                    definition={definition.definition}
                    example={definition.example}
                    key={definition.definition}
                    title={definition.definition}
                  />
                )
              })}

              {!!word?.meanings[0].synonyms! && (
                <Synonyms synonyms={word?.meanings[0].synonyms!} />
              )}
            </MeaningsBox>
          </div>
        ) : errorResponse ? (
          <ErrorsComponent
            message={errorResponse.message}
            resolution={errorResponse.resolution}
            title={errorResponse.title}
          />
        ) : (
          <EmptyResults />
        )}
      </ContentBox>

      <Footer />
    </HomeBox>
  )
}
