import { getDictionary } from "./disctionaries";



export default async function Home({params:{lang}}) {

  const dictionary = await getDictionary(lang)
 

  return (
   <div>
    <h1>hello: {dictionary.save}</h1>
   </div>
  );
}
