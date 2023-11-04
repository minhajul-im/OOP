"use client";

import DashboardMaster from "@/components/DashboardMaster";
import {
  create_blog__Request__API,
  read_all_blog__Request__API,
} from "@/utility/api";
import { SuccessToast } from "@/utility/FormHelper";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

// import ReactQuill from "react-quill";
import { QuillScript } from "@/utility/QuillScript";
import { DeleteAlertBlogPost } from "@/utility/DeleteAlert";
import { BlogUpdateDialog } from "@/components/BlogUpdateDialog";

export default function Page() {

  const [editorData, setEditorData] = useState("");
  const [blog, setBlog] = useState([]);
  let titleRef,
    imgCDNRef = useRef();


  const submit = (e) => {
    e.preventDefault();
    let title = titleRef.value;
    let imgCDN = imgCDNRef.value;
    let des = editorData;
    create_blog__Request__API({ title, imgCDN, des }).then((res) => {
      if (res) {
        SuccessToast("Blog add successful!");
        titleRef.value = "";
        imgCDNRef.value = "";
        setEditorData("");
        read_all_blog__Request__API().then((res) => {
          setBlog(res.data);
        });
      }
    });
  };



  const deleteBlogControl = (id) => {
    DeleteAlertBlogPost(id).then((res) => {
      if (res) {
        read_all_blog__Request__API().then((res) => {
          setBlog(res.data);
        });
      }
    });
  };

  useEffect(() => {
    read_all_blog__Request__API().then((res) => {
      setBlog(res.data);
    });
  }, []);

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <DashboardMaster>
        {/* Service Input Form */}

        <div>
          <div className="grid ">
            <div className="p-5">
              <h1 className="text-xl font-semibold">
                Add Blog - please fill in your information to continue
              </h1>
              <div className="mt-6">
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Blog Title
                    </label>
                    <input
                      ref={(input) => (titleRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Blog Title"
                      autoComplete="given-name"
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Image CDN
                    </label>
                    <input
                      ref={(input) => (imgCDNRef = input)}
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image CDN"
                      autoComplete="given-name"
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Blog Description
                    </label>
                    {/*<ReactQuill*/}
                    {/*  className=" block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"*/}
                    {/*  theme="snow"*/}
                    {/*  value={editorData}*/}
                    {/*  onChange={setEditorData}*/}
                    {/*  modules={QuillScript.modules}*/}
                    {/*  formats={QuillScript.formats}*/}
                    {/*/>*/}
                  </div>
                </div>
                <button
                  onClick={submit}
                  type="submit"
                  className="w-full py-3 mt-[40px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Add Blog
                </button>
              </div>
            </div>
          </div>

          <br />
          <br />
          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Blog Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Blog Image
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {blog.map((item, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">
                      {item.updateAt.split("T", 1)[0]}
                    </td>

                    <td className="px-6 py-4">
                      <img
                        src={item.imgCDN}
                        alt=""
                        className="w-[50px] h-[50px] object-cover"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <span
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => deleteBlogControl(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                        <BlogUpdateDialog id={item.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardMaster>
    </main>
  );
}
