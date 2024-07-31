import { FC, useCallback, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { createCreateMetadataAccountV3Instruction, PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
//import { uploadFileToIPFS } from './ipfs'; // Assuming you have a utility to upload files to IPFS

const FEE_AMOUNT_SOL = 0.05; // Fee amount in SOL
const FEE_PAYER_PUBLIC_KEY = new PublicKey('2bSN5fu475HxTEhfFpYRAnCMDE2fBo4RNoiv7zP1Lx2b'); // Replace with your wallet address
const LAMPORTS_PER_SOL = 1000000000; // 1 SOL = 1 billion lamports

export const CreateNFT: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [file, setFile] = useState<File | null>(null);
  const [nftName, setNftName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [metadataUri, setMetadataUri] = useState('');
  const [sellerFee, setSellerFee] = useState('');
  const [numToMint, setNumToMint] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [mediaUrl, setMediaUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadToIPFS = useCallback(async () => {
    if (file) {
      setUploading(true);
    //   const url = await uploadFileToIPFS(file);
    //   setMediaUrl(url);
      setUploading(false);
    }
  }, [file]);

  const onClick = useCallback(async () => {
    if (!publicKey) {
      alert('Please connect your wallet.');
      return;
    }

    if (!mediaUrl) {
      alert('Please upload a file first.');
      return;
    }

    const feeLamports = FEE_AMOUNT_SOL * LAMPORTS_PER_SOL; // Convert SOL to lamports

    const mintKeypair = Keypair.generate();
    const metadataAddress = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        PROGRAM_ID.toBuffer(),
        mintKeypair.publicKey.toBuffer(),
      ],
      PROGRAM_ID,
    )[0];

    const feeTransferInstruction = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: FEE_PAYER_PUBLIC_KEY,
      lamports: feeLamports,
    });

    const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
      {
        metadata: metadataAddress,
        mint: mintKeypair.publicKey,
        mintAuthority: publicKey,
        payer: publicKey,
        updateAuthority: publicKey,
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: nftName,
            symbol: symbol,
            uri: mediaUrl,
            creators: null,
            sellerFeeBasisPoints: Number(sellerFee),
            uses: null,
            collection: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      },
    );

    // Create a transaction for minting multiple NFTs
    for (let i = 0; i < numToMint; i++) {
      const createNftTransaction = new Transaction().add(
        feeTransferInstruction,
        createMetadataInstruction
      );

      await sendTransaction(createNftTransaction, connection, {signers: [mintKeypair]});
    }
  }, [publicKey, connection, sendTransaction, nftName, symbol, mediaUrl, sellerFee, numToMint]);

  return (
    <div className="my-6 p-10 w-[700px] border-8 border-black rounded-md bg-black">
      <input
        type="text"
        className="form-control block mb-2 w-full p-4 text-xl font-normal bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="NFT Name"
        onChange={(e) => setNftName(e.target.value)}
      />
      <input
        type="text"
        className="form-control block mb-2 w-full p-4 text-xl font-normal bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Symbol"
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        className="form-control block mb-2 w-full p-4 text-xl font-normal bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Seller Fee Basis Points (e.g., 500 for 5%)"
        onChange={(e) => setSellerFee(e.target.value)}
      />
      <input
        type="number"
        className="form-control block mb-2 w-full p-4 text-xl font-normal bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Number to Mint"
        onChange={(e) => setNumToMint(Number(e.target.value))}
      />
      <input
        type="file"
        className="form-control block mb-2 w-full p-4 text-xl font-normal bg-transparent bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={handleFileChange}
      />
      <button
        className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
        onClick={uploadToIPFS}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
      <button
        className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
        onClick={onClick}
      >
        <span>Create NFT</span>
      </button>
    </div>
  )
}
