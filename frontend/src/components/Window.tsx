
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import {girlNames , girlPersonalities } from "../config/women.ts"
import { useSearchParams } from "react-router-dom";






export default function Window() {
  const [searchParams] = useSearchParams();
  const personality = searchParams.get("type") || "shy";
  const filteredGirls = girlNames.filter(girl => girl.type === personality).slice(0, 5);
  const descriptiongirl = girlPersonalities.filter(girl => girl.type === personality);


  return (

    
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-900 to-slate-700  ">
  <div className="relative w-full max-w-xs overflow-visible ">
    <Carousel className="w-full">
      <CarouselContent className="p-0">
        {filteredGirls.map((girl) => (
          <CarouselItem key={girl.id} className="relative w-full">
            <div className="p-1">
              <Card className="p-0 ">
                <CardContent className="flex aspect-square items-center justify-center  p-0">
                 
                    <img src={girl.image} alt={girl.name} className="rounded-xl md:h-120 md:w-80 " />
                  
                 
                </CardContent>
              </Card>
              <p className=" text-lg text-center text-gray-300 font-bold">{girl.name}</p>
            </div>
          </CarouselItem>
          
        ))}
      </CarouselContent>
      {/* These two will now stay visible and positioned correctly */}
      <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  </div>
  
  {/* Descriptions */}
  {descriptiongirl.map((girl) => (
    <p key={girl.type} className="break-words text-gray-400 text-center max-w-xs px-2 py-1 font-semibold">
      {girl.description}
    </p>
  ))}
</div>

  )
}
