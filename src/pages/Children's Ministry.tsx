import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ChildrensMinistry = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-5 mt-16 flex flex-col items-center justify-center min-h-[6vh]">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Children's Ministry!</h1>
      <p className="text-center">This is your new Children's Ministry page content.</p>
    </div>
    <Card className="my-8 p-6 mx-4 md:mx-20 lg:mx-40">
      <h2 className="text-center">
        This is a Card component example on the Children's Ministry page. <br/>
        An Image will be placed here.
      </h2>
    </Card>
    <Card className="my-8 p-6 mx-4 md:mx-20 lg:mx-40">
      <h2 className="text-center">
        This is a Card component example on the Children's Ministry page. <br/>
        An Image will be placed here.
      </h2>
    </Card>
    <Card className="my-8 p-6 mx-4 md:mx-20 lg:mx-40">
      <h2 className="text-center">
        This is a Card component example on the Children's Ministry page. <br/>
        An Image will be placed here.
      </h2>
    </Card>
    <Footer/>
    </>
  );
};

export default ChildrensMinistry;