import { Box, Card, Divider, Grid, Scrollable, Text } from '@react-bulk/native';
import Icon from '@/src/components/Icon';
import { useState } from 'react';

export default function Page() {
  const [visible, setVisible] = useState(false);

  const benefits = [
    {
      icon: <Icon name="Hamburger" size={35} color="black" />,
      price: '596,11',
      name: 'AUXÍLIO ALIMENTAÇÃO',
      bg: 'lightOrange',
    },
    {
      icon: <Icon name="House" size={35} color="black" />,
      price: '263,78',
      name: 'HOME OFFICE',
      bg: 'lightPurple',
    },
    {
      icon: <Icon name="CookingPot" size={35} color="black" />,
      price: '451,43',
      name: 'ALIMENTAÇÃO',
      bg: 'secondary',
    },
    {
      icon: <Icon name="Bicycle" size={35} color="black" />,
      price: '300,00',
      name: 'MOBILIDADE',
      bg: 'lightYellow',
    },
    {
      icon: <Icon name="Heartbeat" size={35} color="black" />,
      price: '451,43',
      name: 'SAÚDE',
      bg: 'lightGreen',
    },
  ];

  let totalBenefits = 0;

  benefits.map((item) => {
    totalBenefits += Number(item.price.replace(/[^0-9.-]+/g, ''));
  });

  const flexBenefits = totalBenefits - 100000;

  return (
    <>
      <Scrollable bg="#fff" contentInset={5}>
        <Card mt={2}>
          <Grid px={2}>
            <Box xs={2} ww={55} borderRadius={100} p={4} bg="grey" mt={1} mr={4}>
              <Icon name="User" size={25} color="blue" />
            </Box>

            <Box xs={8}>
              <Text variant="h1">
                Oi, <Text bold>Henrique</Text>
              </Text>
            </Box>

            <Box xs={1} onPress={() => setVisible(!visible)} pt={4} pl={5}>
              {visible ? <Icon name="Eye" color="black" size={35} /> : <Icon name="EyeSlash" color="black" size={35} />}
            </Box>
          </Grid>
          <Text bold color="black" py={6}>
            BENEFÍCIOS
          </Text>
          <Scrollable direction="horizontal" hideScrollBar mr={-10}>
            <Box row noWrap gap={10}>
              {benefits.map((item, index) => (
                <Card key={index} bg={item.bg} borderRadius={20} w={165} h={210}>
                  <Box p={2}>{item.icon}</Box>

                  <Box mt={4} pl={2}>
                    <Text alignItems="center">R$</Text>
                    <Text bold variant="h4">
                      {visible ? item.price : '•'.repeat(item.price.length)}
                    </Text>
                    <Text bold color="black" size={1} mt={item.name.length > 15 ? 4 : 7}>
                      {item.name}
                    </Text>
                  </Box>
                </Card>
              ))}
            </Box>
          </Scrollable>

          <Box mt={8} alignItems="center" direction="row" justifyContent="space-between">
            <Text bold>Total em benefícios</Text>
            <Text bold>
              R${' '}
              {visible
                ? `${totalBenefits.toString().slice(0, -2)},${totalBenefits.toString().substr(-2)}`
                : '•'.repeat(totalBenefits.toString().length)}
            </Text>
          </Box>
          <Box mt={4} alignItems="center" direction="row" justifyContent="space-between">
            <Box row>
              <Text>Valor flexível</Text>
              <Box pl={2}>
                <Icon name="Info" size={20} color="black" />
              </Box>
            </Box>
            <Text>
              R${' '}
              {visible
                ? `${flexBenefits.toString().slice(0, -2)},${flexBenefits.toString().substr(-2)}`
                : '•'.repeat(flexBenefits.toString().length)}
            </Text>
          </Box>
          <Box mt={5} alignItems="center" direction="row" justifyContent="space-between">
            <Text bold>Próximo benefício</Text>
            <Text bold>Não agendado</Text>
          </Box>

          <Grid gap={4} mt={1}>
            <Box xs={11}>
              <Divider mt={4} border={1} />
            </Box>
            <Box xs={1} pt={3}>
              <Icon name="CaretUp" size={20} color="black" />
            </Box>
          </Grid>
        </Card>
      </Scrollable>
    </>
  );
}
