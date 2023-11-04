
import { SendEmail } from "@/utility/SendEmailUtility";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
  let reqBody = await req.json();
  let name = reqBody.name;
  let EmailSubject = reqBody.subject;
  let email = reqBody.email;
  let EmailText = reqBody.massage;

    let res = await SendEmail(
      name,
      email,
      EmailText,
      EmailSubject
    );

    return NextResponse.json({ status: "Success", data: res });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
