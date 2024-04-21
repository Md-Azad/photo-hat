import { getDictionary } from "@/app/[lang]/disctionaries";
import Image from "next/image";

const   PhotoDetails = async({id,lang}) => {

    const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`)
    const photo = await response.json();
    console.log(photo)

    const dictionary = await getDictionary(lang);
  return (
    <div class="grid grid-cols-12 gap-4 2xl:gap-10 ">
    
      <div class="col-span-12 lg:col-span-8 border rounded-xl">
        <Image class="max-w-full h-full max-h-[70vh] mx-auto" src={photo.url} alt={photo.title} width={900} height={500} />
      </div>
     
      <div class="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 class="text-lg lg:text-2xl font-bold mb-2">
          The Beautiful Nature
        </h2>
        <div class="text-xs lg:text-sm text-black/60 mb-6">
          {
            photo.tags.map(tag=> `#${tag} `)
          }
        </div>
        
        <div class="space-y-2.5 text-black/80 text-xs lg:text-sm">
          
          <div class="flex justify-between">
            <span>{dictionary.views}</span>
            <span class="font-bold">10M</span>
          </div>
        
          <div class="flex justify-between">
            <span>{dictionary.share}</span>
            <span class="font-bold">10M</span>
          </div>
          
          <div class="flex justify-between">
            <span>{dictionary.uploadedOn}</span>
            <span class="font-bold">{photo.uploaded}</span>
          </div>
      
        </div>
      

       
        <div class="mt-6">
          
          <div class="flex justify-between items-center mb-3">
          
            <div class="flex items-center gap-3">
              <Image class="size-12 lg:size-14 rounded-full border" src={photo.author.avatar} alt="avatar" width={50} height={50} />
              <div class="spacy-y-3">
                <h6 class="lg:text-lg font-bold">{photo.author.name}</h6>
                <p class="text-black/60 text-xs lg:text-sm">{photo.author.followers} {dictionary.followers}</p>
              </div>
            </div>
           
            <button class="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image src="/follow.svg" class="w-5 h-5" alt="Follow" width={5} height={5} />
              {dictionary.follow}
            </button>
          </div>
    
          <p class="text-xs lg:text-sm text-black/60">
            {photo.author.bio}
          </p>
        </div>
        
        <div class="mt-6">
          <div class="flex items-stretch gap-3">
            <button
              class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/heart.svg" class="w-5 h-5" alt="Heart" width={5} height={5} />
              {photo.likes}
            </button>
            <button
              class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/save.svg" class="w-5 h-5" alt="Save" width={5} height={5} />
              {dictionary.save}
            </button>
            <button
              class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/share.svg" class="w-5 h-5" alt="share" width={5} height={5} />
                {dictionary.share}
            </button>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default PhotoDetails;
