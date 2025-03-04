import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [isPasswodrShow, setisPasswodrShow] = useState(false);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submiting...");
    if (formData.email && formData.password) {
      toast.success(`${formData.email} is Login successfull`);
      navigate("new_project");
      setformData({
        email: "",
        password: "",
      });
      return
    }else{
        toast.error('User not valid')
    }
  };

  return (
    <div className="w-screen h-screen min-h-[400px] md:p-5">
      <div className="flex h-full md:rounded-3xl bg-[url(https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center">
        <div className="w-full p-4 hidden md:block">
          {/* <img className="h-full w-full object-cover rounded-2xl pointer-events-none" src={imageUrl} alt="" /> */}
        </div>
        <div className="w-full grid place-content-center">
          <form className="w-80" onSubmit={HandleSubmit}>
            <div className="flex flex-col gap-3.5 h-full justify-center">
              <div>
                <input
                  className="w-full backdrop:blur-2xl p-2 outline-0 border border-transparent shadow-sm rounded-sm focus:border-primary"
                  type="text"
                  name="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setformData((pre) => ({ ...pre, email: e.target.value }))
                  }
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="relative">
                <input
                  className="w-full p-2 backdrop:blur-2xl outline-0 border border-transparent shadow-sm focus:border-primary"
                  type={isPasswodrShow ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setformData((pre) => ({ ...pre, password: e.target.value }))
                  }
                  name="password"
                  placeholder="Enter Your Password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setisPasswodrShow(!isPasswodrShow);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {isPasswodrShow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z" />
                    </svg>
                  )}
                </button>
              </div>
              <div>
                <input
                  className="w-full p-2 outline-0 border-slate-600 shadow-sm rounded-sm transition-all uppercase hover:border-transparent hover:bg-primary hover:text-white"
                  type="submit"
                  value={"Submit"}
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
