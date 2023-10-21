export const contractAddress = "0xe28c3dA82AD305DCEa0F841afcae837730E062bE";

const ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "yourName",
        type: "string",
      },
      {
        internalType: "string",
        name: "CompanyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "addOrUpdateClientData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "yourName",
        type: "string",
      },
    ],
    name: "ClientDataUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "markClientDataAsDeleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "clients",
    outputs: [
      {
        internalType: "string",
        name: "yourName",
        type: "string",
      },
      {
        internalType: "string",
        name: "CompanyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "deleted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "getClientData",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "yourName",
            type: "string",
          },
          {
            internalType: "string",
            name: "CompanyName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "deleted",
            type: "bool",
          },
        ],
        internalType: "struct ClientDataStorage.Client",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default ABI;
