import { dbconfig } from "@/app/utils/dbconfig";
import heroModel from "@/app/utils/model/heroModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbconfig();

    const { heroID } = params;
    const { title, desc, image, imageID, color, fontSize } = await req.json();

    const hero = await heroModel.findByIdAndUpdate(
      heroID,
      { title, desc, image, imageID, color, fontSize },
      { new: true }
    );

    return NextResponse.json({
      message: "Done updating",
      status: 200,
      data: hero,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error found",
      status: 404,
      error: error.message,
    });
  }
};
