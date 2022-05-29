import { signIn } from "next-auth/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import react from "react";
const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});
function Login({ providers }) {
  const [viewState, setViewState] = react.useState(false);
  const onResumeClick = () => {
    setViewState(!viewState);
  };
  const ViewerPitchdeck = () => {
    if (viewState) {
      return <FileViewer fileType="pdf" filePath="../static/pitchdeck.pdf" />;
    } else {
      return <div></div>;
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center space-y-20 pt-45">
        <Image
          src="https://rb.gy/ogau5a"
          width={150}
          height={150}
          objectFit="contain"
        />

        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* https://devdojo.com/tailwindcss/buttons#_ */}
              <h2 className="text-xl mb-3" style={{ marginTop: "-50px" }}>
                Welcome fren,
              </h2>
              <button
                className="relative inline-flex items-center justify-start px-9 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#0567a6] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Enter <span className="font-bold">mods.social</span>
                </span>
              </button>
              <h4 className="underline" onClick={onResumeClick}>
                Learn more
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
