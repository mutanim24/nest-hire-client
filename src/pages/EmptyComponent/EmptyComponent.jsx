
"use client";
import image from "../../assets/Property 1=Search, Property 2=Sm.svg";
import { Empty } from "keep-react";

const EmptyComponent = () => {
  return (
    <Empty>
      <Empty.Image>
        <img
          src={image}
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>Sorry, No result found!</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}

export default EmptyComponent
