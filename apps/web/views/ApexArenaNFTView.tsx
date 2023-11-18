/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import useAlchemy from "@/hooks/useAlchemy";
import { useAccount, useContractRead } from "wagmi";
import useMounted from "@/hooks/useMounted";
import Image from "next/image";
// import { CFAv2ABI } from "@/lib/abi";

const ApexArenaNFTView = () => {
  const { getNFTsByAddress, refreshData } = useAlchemy();
  const { address, isConnected } = useAccount();
  const [nftCollection, setNftCollection] = useState<any>([]);

  const [tokenId, setTokenId] = useState<any>([]);

  const { data: batchGetImage } = useContractRead({
    address: "", // contract address
    // abi: CFAv2ABI,
    functionName: "batchGetImage",
    args: [tokenId],
    watch: true,
  });

  const getData = async () => {
    try {
      const nftsByAddress: any = await getNFTsByAddress(String(address), {
        contractAddresses: [""], // contract address
        refreshCache: true,
        omitMetadata: false,
        pageSize: 10,
        tokenUriTimeoutInMs: 10000,
      });
      const nft_collection = nftsByAddress?.ownedNfts;
      const nft_collection_data: any = [];
      const imageArray: any = [];

      nft_collection.map((ownedNFT: any) => {
        nft_collection_data.push(ownedNFT);
        imageArray.push(ownedNFT.tokenId);
      });
      setTokenId(imageArray);
      setNftCollection(nft_collection_data);
      console.log(nft_collection_data);
    } catch (err) {
      console.info(err);
    }
  };

  function getImage(index: any) {
    return (batchGetImage as any)?.[index] ?? "";
  }

  useEffect(() => {
    {
      if (isConnected) {
        getData();
      }
    }
  }, [address]);

  const { hasMounted } = useMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center h-[58rem] max-h-[90vh]">
        {isConnected ? (
          <>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center grow max-w-[70rem] max-h-[80vh] overflow-y-auto px-[1rem]">
              <>
                {nftCollection.length === 0 ? (
                  <h1 className="text-white">You dont owned Savings NFT</h1>
                ) : (
                  <>
                    {nftCollection.map((data: any, index: string) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 max-w-[250px] p-5 grow rounded-lg bg-[#1b3418] border border-[#9aff76]"
                        >
                          <>
                            <Image
                              src={getImage(index)}
                              alt={"avalanche"}
                              height={200}
                              width={200}
                              className="rounded-lg"
                            />
                            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
                              <h1 className="text-white font-medium text-lg">
                                {data.tokenId}
                              </h1>
                            </div>
                          </>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center rounded-md p-5 max-h-[15rem] max-w-[20rem] w-full h-full">
            <h1 className="text-[#9aff76] font-bold uppercase">
              Connect Wallet First
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ApexArenaNFTView;
