import { Link } from '@remix-run/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '~/components/ui/carousel'

type DateButtonProps = {
  children: React.ReactNode
}

const DateButton = ({ children }: DateButtonProps) => {
  return (
    <Link
      to="/cartelera/123"
      className="w inline-block w-28 rounded-full border border-gray-500 bg-white px-6 py-1 text-center text-gray-500 hover:bg-gray-100"
    >
      {children}
    </Link>
  )
}

export const OtherMoviesCarousel = () => {
  return (
    <Carousel className="md: mx-auto w-[80%] lg:w-[90%]">
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="transition-transform hover:scale-105 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Link className="flex flex-col gap-4 rounded-md border p-1" to="/">
              <img
                className="aspect-[2/3] w-full rounded-md object-cover"
                src="https://admin.cinemasroyalfilms.com/assets/images/movies-poster/1703626035495-Kung%20Fu%20Panda%204.png"
                alt=""
              />
              <h3 className="text-center text-lg font-bold">
                Movie {index + 1}
              </h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export const MovieDates = () => {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full pl-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <h3 className="text-md font-bold">Martes 12 de Octubre</h3>
            <span className="text-xs text-gray-500">5 funciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-4">
          <DateButton>10:00 am</DateButton>
          <DateButton>12:00 pm</DateButton>
          <DateButton>2:00 pm</DateButton>
          <DateButton>4:00 pm</DateButton>
          <DateButton>6:00 pm</DateButton>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <h3 className="text-md font-bold">Martes 12 de Octubre</h3>
            <span className="text-xs text-gray-500">5 funciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-4">
          <DateButton>10:00 am</DateButton>
          <DateButton>12:00 pm</DateButton>
          <DateButton>2:00 pm</DateButton>
          <DateButton>4:00 pm</DateButton>
          <DateButton>6:00 pm</DateButton>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <h3 className="text-md font-bold">Martes 12 de Octubre</h3>
            <span className="text-xs text-gray-500">5 funciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-4">
          <DateButton>10:00 am</DateButton>
          <DateButton>12:00 pm</DateButton>
          <DateButton>2:00 pm</DateButton>
          <DateButton>4:00 pm</DateButton>
          <DateButton>6:00 pm</DateButton>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <h3 className="text-md font-bold">Martes 12 de Octubre</h3>
            <span className="text-xs text-gray-500">5 funciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-4">
          <DateButton>10:00 am</DateButton>
          <DateButton>12:00 pm</DateButton>
          <DateButton>2:00 pm</DateButton>
          <DateButton>4:00 pm</DateButton>
          <DateButton>6:00 pm</DateButton>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
