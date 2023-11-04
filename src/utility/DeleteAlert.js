import Swal from "sweetalert2";
import { delete_blog__Request__API, delete_service__Request__API } from "./api";

export const DeleteAlertBlogPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return delete_blog__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};

export const DeleteAlertServicePost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return delete_service__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};