
import User from "../user/User";
import useUsersList from "../../../hooks/useUsersList";


const About = () => {
  const userData = {
    name: "Tulika",
    location: "India",
    contact: "tulika",
  };

  const userInfo = useUsersList();
  
  return (
    <div className="my-10 font-sans mx-auto w-1/3 max-w-full flex flex-col gap-6 ">
      <div className="flex flex-col justify-center text-center gap-6">
        <span className="font-semibold text-3xl"> About Us</span>
        <p className="text-lg">
          This is an Akshay Saini tutorials page. Yu can visit the website{" "}
          <a href="https://namastedev.com/">NamasteDev</a> to learn more about
          this course. Tulika is the primary contributor of this page
        </p>
      </div>
      <div>
      </div>
      <div className="about-card flex flex-wrap justify-center">
        <User user={userInfo}></User>
      </div>
    </div>
  );
};

export default About;


