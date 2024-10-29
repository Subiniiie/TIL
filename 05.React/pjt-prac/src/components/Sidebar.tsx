import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Sidebar: React.FC = () => {
  return (
    <Flex>
      {/* 사이드바 */}
      <Box
        as="aside"
        width="250px" // 사이드바 너비
        height="100vh" // 사이드바 높이
        bg="gray.200" // 배경 색상
        p={4} // 패딩
        position="fixed" // 고정 위치
      >
        <Text fontSize="lg" mb={4}>Sidebar Title</Text>
        <Button variant="outline" mb={2}>Button 1</Button>
        <Button variant="outline" mb={2}>Button 2</Button>
        <Button variant="outline">Button 3</Button>
      </Box>
      {/* <Box
      ml="250px" // 사이드바의 너비만큼 왼쪽 여백
      p={4} // 페이지 콘텐츠 패딩
      flex="1" // 남은 공간을 차지하도록 설정
    >
        </Box> */}
    </Flex>
  );
};

export default Sidebar;
