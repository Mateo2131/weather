import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TabContent from '@/components/TabsPanel'

function Index({ TodayForecast }) {
  return (
    <Tabs variant='line' colorScheme='gray'>
      <TabList gap={3}>
        <Tab p='2'>Today</Tab>
        <Tab p='2' isDisabled>
          Tomorrow
        </Tab>
        <Tab p='2' isDisabled>
          Next 7 days
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          p='0'
          mt='4'
          display='grid'
          gridAutoFlow='column'
          overflowX='scroll'
          gap='10px'
        >
          {TodayForecast.map((item, index) => {
            return (
              <TabContent
                key={index}
                temp={item.temp}
                time={item.time}
                icon={item.icon}
              />
            )
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Index
