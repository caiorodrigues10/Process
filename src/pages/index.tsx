import Head from 'next/head'
import { CategoryComponent } from '../components/CategoryComponent'
import { FilterComponent } from '../components/FilterComponent'
import { NavbarComponent } from '../components/NavbarComponent'
import { NumberResultComponent } from '../components/NumberResultsComponent'
import { ResultsComponent } from '../components/ResultsComponent'
import { VerticalMenuComponent } from '../components/VerticalMenuComponent'
import { RatingComponent } from '../components/RatingComponent'
import { SearchComponent } from '../components/SearchComponent'
import { PagesComponent } from '../components/PagesComponent'
import { CardsComponent } from '../components/CardsComponent'
import { MenssageComponent } from '../components/MenssageComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Processo Seletivo</title>

        <VerticalMenuComponent />

        <MenssageComponent />

        <NavbarComponent />

        <ResultsComponent />

        <FilterComponent />

        <NumberResultComponent />

        <CategoryComponent />

        <RatingComponent />

        <SearchComponent />
        
        <CardsComponent />
        <CardsComponent />
        <CardsComponent />
        <CardsComponent />
        <CardsComponent />

        <PagesComponent />

      </Head>
    </div>
  )
}
