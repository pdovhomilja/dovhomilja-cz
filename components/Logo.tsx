import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <div className="btn btn-outline">
        <Link href="/">pd</Link>
      </div>
    </div>
  );
};

export default Logo;
