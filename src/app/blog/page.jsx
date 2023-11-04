
import Action from "@/components/Action";
import Blog from "@/components/Blog";
import {PrismaClient} from "@prisma/client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";


async function getData() {
  const prisma=new PrismaClient();
  let blogs= await prisma.blog.findMany({
      orderBy: {id: 'desc'}
  })

  return blogs
}


export default async function  Home () {

  const data=await getData()
  console.log(data)
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Blog */}
      <Blog data={data}/>

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
