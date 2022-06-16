import React from "react";
import { Container, IconButton, Box } from "@chakra-ui/react";

import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function LinkButtons() {
  return (
    <>
      <Box mt={20} mb={5}>
        <Container>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/manthan-824104178/"
            target="_blank"
          >
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              isRound={true}
              mr={2}
              icon={<AiFillLinkedin />}
            />
          </a>

          <a rel="noreferrer" href="http://wa.me/8219751407" target="_blank">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              isRound={true}
              mr={2}
              icon={<AiOutlineWhatsApp />}
            />
          </a>
          <a rel="noreferrer" href="mailto:manthanbhatia367@gmail.com">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              isRound={true}
              mr={2}
              icon={<AiOutlineMail />}
            />
          </a>
        </Container>
      </Box>
    </>
  );
}

export default LinkButtons;
