// import { dbconfig } from "@/app/utils/dbconfig";
// // import myHeaderModel from "@/app/utils/model/HeaderModel";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async (req: NextRequest) => {
//   try {
//     await dbconfig();
//     const { logo, navs, btnText } = await req.json();
//     const getD = await myHeaderModel.create({ logo, navs, btnText });
//     return NextResponse.json({
//       message: "Header Created",
//       status: 200,
//       data: getD,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       message: "Error Occured",
//       status: 400,
//       error: error.message,
//     });
//   }
// };

// export const GET = async (req: NextRequest) => {
//   try {
//     await dbconfig();
//     const getD = await myHeaderModel.find();
//     return NextResponse.json({
//       message: "Hero's Found",
//       status: 200,
//       data: getD,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       message: "Error Occured",
//       status: 400,
//       error: error.message,
//     });
//   }
// };
