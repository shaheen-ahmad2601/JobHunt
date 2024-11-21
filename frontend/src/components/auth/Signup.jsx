// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../shared/Navbar";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { Button } from "@/components/ui/button";
// import { RadioGroup } from "@/components/ui/radio-group";

// const Signup = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//     file: "",
//   });

  

//   const changeHandlers = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandlers = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault(); 
//     console.log(input);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
//         >
//           <h1 className="font-bold text-xl mb-5">Sign up</h1>

//           <div className="my-2">
//             <Label>Full Name</Label>
//             <Input
//               type="text"
//               value={input.fullname} 
//               name="fullname"
//               onChange={changeHandlers}
//               placeholder="Enter Name"
//             />
//           </div>

//           <div className="my-2">
//             <Label>Email</Label>
//             <Input
//               type="email"
//               placeholder="Enter Email"
//               value={input.email} 
//               name="email"
//               onChange={changeHandlers}
//             />
//           </div>

//           <div className="my-2">
//             <Label>Phone Number</Label>
//             <Input
//               type="text"
//               placeholder="Enter Phone"
//               value={input.phoneNumber} 
//               name="phoneNumber"
//               onChange={changeHandlers}
//             />
//           </div>

//           <div className="my-2">
//             <Label>Password</Label>
//             <Input
//               type="password"
//               value={input.password} 
//               name="password"
//               onChange={changeHandlers}
//               placeholder="Enter Password"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeHandlers}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   value="recruiter"
//                   name="role"
//                   checked={input.role === "recruiter"}
//                   onChange={changeHandlers}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>

//             <div className="flex items-center gap-2">
//               <Label>Profile</Label>
//               <Input
//                 accept="image/*"
//                 type="file"
//                 onChange={changeFileHandlers}
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>

//           <Button
//             type="submit"
//             className="w-full my-4 hover:bg-slate-800 bg-slate-700 text-white"
//           >
//             Signup
//           </Button>
//           <span>
//             Already have an account?
//             <Link to="/login" className="text-blue-600">
//               Login
//             </Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const changeHandlers = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandlers = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeHandlers}
              placeholder="Enter Name"
            />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={input.email}
              name="email"
              onChange={changeHandlers}
            />
          </div>

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter Phone"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeHandlers}
            />
          </div>

          <div className="my-2 relative">
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"} 
                value={input.password}
                name="password"
                onChange={changeHandlers}
                placeholder="Enter Password"
                className="pr-10" 
              />
              <div
                className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeHandlers}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="recruiter"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeHandlers}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandlers}
                className="cursor-pointer"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full my-4 hover:bg-slate-800 bg-slate-700 text-white"
          >
            Signup
          </Button>
          <span>
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
