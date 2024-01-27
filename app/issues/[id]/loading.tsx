import { Skeleton } from '@/app/components'
import { Box, Card, Flex, Heading } from '@radix-ui/themes'

const LoadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Heading>
        <Skeleton />
      </Heading>
      <Flex gap='5'>
        <Skeleton width='5rem' />
        <Skeleton />
      </Flex>
      <Card className='prose' mt='4'>
        <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default LoadingIssueDetailPage
