import axios from "axios";
import { ErrorToast } from "./FormHelper";

//! ================== Create New Blog ===================
export const create_blog__Request__API = async (reqBody) => {
  let URL = "/api/dashboard/blog/create";

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read All Blog ===================
export const read_all_blog__Request__API = async () => {
  let URL = "/api/dashboard/blog/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read single Blog ===================
export const read_single_blog__Request__API = async (id) => {
  let URL = `/api/dashboard/blog/read-single?id=${id}`;

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Update Blog ===================
export const update_blog__Request__API = async ({ title, imgCDN, des, id }) => {
  let reqBody = { title, imgCDN, des };

  let URL = `/api/dashboard/blog/update?id=${id}`;
  console.log(URL);
  try {
    const result = await axios.post(URL, reqBody);

    console.log(result);
    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Delete Single Blog ===================
export const delete_blog__Request__API = async (id) => {
  let URL = `/api/dashboard/blog/delete?id=${id}`;
  try {
    const result = await axios.delete(URL);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ============================ Service ============================

//! ================== Create New Service ===================
export const create_service__Request__API = async (reqBody) => {
  let URL = "/api/dashboard/service/create";

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Read All Service ===================
export const read_all_service__Request__API = async () => {
  let URL = "/api/dashboard/service/read";

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};
//! ================== Read single Service ===================
export const read_single_service__Request__API = async (id) => {
  let URL = `/api/dashboard/service/read-single?id=${id}`;

  try {
    const result = await axios.get(URL);

    if (result.data.status === "Success") {
      return result.data;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Update Service ===================
export const update_service__Request__API = async ({ title, imgCDN, id }) => {
  let reqBody = { title, imgCDN };

  let URL = `/api/dashboard/service/update?id=${id}`;

  try {
    const result = await axios.post(URL, reqBody);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};

//! ================== Delete Single Service ===================
export const delete_service__Request__API = async (id) => {
  let URL = `/api/dashboard/service/delete?id=${id}`;
  try {
    const result = await axios.delete(URL);

    if (result.data.status === "Success") {
      return true;
    } else {
      ErrorToast("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something Went Wrong-2");
    return false;
  }
};
