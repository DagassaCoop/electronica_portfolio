import { FC } from "react";

// Assets
import ArrowTopRight from "@/assets/svg/ArrowTopRight";

// Components
import IconButton from "./IconButton";
import Button from "./Button";

interface IPromoProps {
  className?: string;
}

const Promo: FC<IPromoProps> = ({ className }) => {
  return (
    <div
      className={[
        "w-[300px] p-4 bg-color-black flex-col gap-4 xl:flex",
        className,
      ].join(" ")}
    >
      <div className="text-white flex justify-between">
        <h3 className="font-trap font-bold text-2xl">
          Let&apos;s discuss upgrades,free of charge!
        </h3>
        <div>
          <IconButton
            icon={<ArrowTopRight />}
            className="cursor-pointer"
            href="/contact"
            isRoute
          />
        </div>
      </div>
      <Button variant="white" className="w-full" href="/contact" isRoute>
        get in touch
      </Button>
    </div>
  );
};

export default Promo;
