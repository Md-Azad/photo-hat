import { getAllPhotos } from "@/lib/image-data";


export default function Home() {
  const allPhotos = getAllPhotos();
  console.log(allPhotos)
  return (
   <div>
    <h1>hello</h1>
   </div>
  );
}
