import {
  Text,
  Button,
  useMediaQuery,
  IconButton,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalBody,
  Flex,
  Textarea,
  HStack,
  useColorModeValue,
  CloseButton,
} from "@chakra-ui/react";

import { MdModeComment } from "react-icons/md";
import { memo, useState } from "react";

import Image from "next/image";

import ProfileImage from "public/assets/ates.jpg";
import { RiGalleryLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { useStorken } from "../../data/storken";

import { IoIosArrowBack } from "react-icons/io";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" },
];

interface Size {
  width?: number | undefined;
  height?: number | undefined;
}

export const CommentButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [commentText, setCommentText] = useStorken<string>("commentText");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleAdd = (e: string) => {
    if (e !== "") {
      setCommentList([...commentList, e]);
      setCommentText.set("");
    } else alert("Please enter a value");
  };

  const [isMobile] = useMediaQuery("(max-width: 980px)");

  const [pickerItems, setPickerItems] = useState(countries);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCreateItem = (item: any) => {
    setPickerItems((curr) => [...curr, item]);
    //  setSelectedItems((curr) => [...curr, item]);

    setCommentText.set("");
  };

  const handleSelectedItemsChange = (selectedItems: any) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const AutoComplate = (e: any) => {
    setCommentText.set(e);

    const splitData = commentText.indexOf("@", 0);

    //SEARCH @ CHAR İN COMMENT TEXT
  };

  const [isTrue, setIsTrue] = useState(false);
  return (
    <Flex>
      <Modal isOpen onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent
          borderRadius={20}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          m={{ base: "4%", md: "%10", lg: "14%" }}
          bgColor={"#1D3240"}
        >
          <ModalBody minW={"100%"} minH={"20vh"}>
            <Flex
              w={"100%"}
              minH={{ base: "30vh", md: "40vh" }}
              bgColor={"transparent"}
              py={3}
              px={2}
              gap={0}
              flexDir={{ base: "column" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex w={"100%"} h={"10vh"} gap={2}>
                <Image
                  src={ProfileImage.src}
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                  alt=""
                ></Image>
                <Flex w={"100%"} flexDir={"column"} gap={2}>
                  <Flex flexDir={"row"} gap={2} color={"white"}>
                    <Text fontSize={12} fontWeight={"bold"}>
                      Atesh.eth
                    </Text>
                    <Text fontSize={12} fontWeight={"light"}>
                      @Ateshh
                    </Text>
                    <Text fontSize={12} fontWeight={"light"}>
                      14 years ago
                    </Text>
                  </Flex>
                  <Flex w={"90%"}>
                    <Text
                      textStyle={"normal"}
                      fontWeight={"medium"}
                      fontSize={12}
                      color={"white"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Egestas integer amet consequat purus mi quam. Massa,
                      turpis vitae viverra aenean eget ut tempus enim. Nibh at
                      arcu malesuada ut facilisi ipsum. Orci sit orci, platea
                      cras.
                    </Text>
                  </Flex>
                </Flex>
                <CloseButton onClick={onClose} color={"white"} />
              </Flex>
              <Flex ml={10} w={"80%"} flexDir={"column"} gap={1} py={10}>
                {commentList.map((item, index) => {
                  return (
                    <Flex
                      key={index}
                      bgColor={"#1D3250"}
                      w={"100%"}
                      h={"6vh"}
                      borderRadius={{
                        base: "0px 10px 10px 0px",
                      }}
                      p={1}
                      gap={2}
                      minH={"-webkit-min-content"}
                      borderLeft={"2px red solid"}
                      alignItems={"center"}
                    >
                      <Image
                        alt=""
                        src={ProfileImage.src}
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "50%",
                        }}
                      ></Image>
                      <Text
                        color={"white"}
                        fontSize={12}
                        fontWeight={"medium"}
                        whiteSpace={"pre-wrap"}
                      >
                        {item}
                      </Text>
                    </Flex>
                  );
                })}
              </Flex>

              <Flex
                w={"80%"}
                h={"16vh"}
                bgColor={"#1D3240"}
                flexDir={"column"}
                ml={10}
                borderRadius={4}
                border={"1px solid"}
                borderColor={"whiteAlpha.200"}
              >
                <Flex w={"100%"} h={"60%"} flexDir={"row"} gap={2} p={2}>
                  <Textarea
                    overflowY={"hidden"}
                    color={"white"}
                    fontWeight={"medium"}
                    fontSize={10}
                    variant={"none"}
                    h={"max-content"}
                    value={commentText}
                    bgColor={"transparent"}
                    placeholder={"Yanıtınızı Giriniz"}
                    _placeholder={{ color: "whiteAlpha.400" }}
                    onChange={(e) => AutoComplate(e.target.value)}
                  ></Textarea>
                </Flex>
                <Flex
                  w={"100%"}
                  h={"40%"}
                  flexDir={"row"}
                  gap={2}
                  p={2}
                  justifyContent={"space-between"}
                  display={"flex"}
                >
                  <Flex h={"100%"} alignItems={"end"} gap={4} pb={1}>
                    <RiGalleryLine color={"#EDB400"} size={20} />
                    <BsEmojiSmile color={"#EDB400"} size={20} />
                    <AiOutlineFileGif color={"#EDB400"} size={20} />
                    <GoLocation color={"#EDB400"} size={20} />
                  </Flex>
                  <Flex h={"100%"} alignItems={"end"}>
                    <Button
                      variant={"none"}
                      mb={0}
                      size={"sm"}
                      onClick={() => handleAdd(commentText)}
                    >
                      <IoSend color={"#EDB400"} size={26} />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      )
    </Flex>
  );
};

export default memo(CommentButton);
