import React, { useState } from "react";
import Navbar from "../shared/Navbar";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { USER_API } from "@/utils/constants";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth || { loading: false });
  const [input, setInput] = useState({
    email: "",

    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API}/login`,
        input,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex items-center justify-center
      "
      >
        <form
          onSubmit={SubmitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <div className="font-bold text-xl mb-5">Login</div>

          <div className="my-2">
            <Label htmlFor="">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="aakash@gmail.com"
            />
          </div>

          <div className="my-2">
            <Label htmlFor="">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="xxxxxxxxxx"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button
            className="mr-2 h-4 w-4 "
            >
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-4 bg-[#6A38C2]"
            >
              Login
            </Button>
          )}
          <span className="text-sm">
            Create an Account?
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
