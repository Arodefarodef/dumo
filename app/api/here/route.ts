import { NextRequest, NextResponse } from "next/server";
import { dbconfig } from "../../utils/dbconfig";
import heroModel from "../../utils/model/heroModel";

export const GET = async () => {
  try {
    await dbconfig();

    const hero = await heroModel.find();
    return NextResponse.json({
      message: "All good",
      status: 200,
      data: hero,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error",
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbconfig();

    const { title, desc, image, imageID } = await req.json();
    const hero = await heroModel.create({ title, desc, image, imageID });

    return NextResponse.json({
      message: "Reading hero",
      status: 200,
      data: hero,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error",
      status: 404,
    });
  }
};
