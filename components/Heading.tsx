import { HeadingComponentProps } from "../lib/types";
const Heading = ({ data }: { data: HeadingComponentProps }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 mb-8 fl text-start lg:px-8 gap-x-3 justify-normal">
        <div className="flex flex-row flex-wrap w-full gap-x-2">
          <div
            className={`p-2 w-fit rounded-md   ${data.bgColor}  bg-opacity-80`}
          >
            <data.icon className={`w-10 h-10 ${data.iconColor}`} />
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="text-sm text-muted-foreground">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
