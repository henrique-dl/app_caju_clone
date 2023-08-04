import { Box, Card, Collapse, Divider, Grid, Scrollable, Text } from '@react-bulk/native';
import Icon from '@/src/components/Icon';
import { useState } from 'react';

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [collapse, setCollapse] = useState(false);

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
          <Text bold color="black" mt={6} mb={3}>
            BENEFÍCIOS
          </Text>
          <Scrollable direction="horizontal" hideScrollBar mr={-10}>
            <Box row noWrap gap={10}>
              {benefits.map((item, index) => (
                <Card key={index} bg={item.bg} borderRadius={20} w={165} h={210} onPress={() => console.log('pressed')}>
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

              <Card border={1} borderColor="blue" borderRadius={20} w={100} h={210} mr={8}>
                <Box flex justifyContent="center" alignItems="center">
                  <Box xs={2} ww={60} borderRadius={100} p={4} borderColor="blue" border={1} mt={10} mx={2}>
                    <Icon name="Square" size={25} color="blue" />
                  </Box>
                  <Text color="blue" bold pt={8}>
                    ORDENAR
                  </Text>
                </Box>
              </Card>
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

          <Collapse in={collapse}>
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
          </Collapse>

          <Grid gap={4} mt={1}>
            <Box xs={11}>
              <Divider mt={4} border={1} />
            </Box>
            <Box xs={1} pt={3} onPress={() => setCollapse(!collapse)}>
              {collapse ? (
                <Icon name="CaretUp" size={20} color="black" />
              ) : (
                <Icon name="CaretDown" size={20} color="black" />
              )}
            </Box>
          </Grid>

          <Text bold pt={5} pb={4}>
            OUTROS SALDOS
          </Text>

          <Card bg="lighter" borderRadius={20} w={420} h={85} mr={8}>
            <Grid center pt={3}>
              <Box xs={2} pl={2}>
                <Icon name="CreditCard" size={35} color="black" />
              </Box>
              <Box xs={7}>
                <Text bold>SALDO LIVRE</Text>
              </Box>
              <Box xs={1} mr={-3}>
                R$
              </Box>
              <Box xs={2}>
                <Text bold>{visible ? '197,53' : '•••••'}</Text>
              </Box>
            </Grid>
          </Card>

          <Text mt={8} mb={1} bold>
            AÇÕES
          </Text>

          <Card w={420} h={70}>
            <Grid center pt={1}>
              <Box ml={-4} xs={2} ww={35} hh={35} p={2} borderRadius={100} bg="blue">
                <Icon name="ArrowsClockwise" size={20} color="white" />
              </Box>
              <Box xs={10} pl={3}>
                <Text>Transferir saldo entre benefícios</Text>
              </Box>
              <Box xs={1} pl={4}>
                <Icon name="CaretRight" size={20} color="blue" />
              </Box>
            </Grid>
            <Divider mt={3} />
          </Card>

          <Card w={420} h={70}>
            <Grid center>
              <Box ml={-4} xs={2} ww={35} hh={35} p={2} borderRadius={100} bg="blue">
                <Icon name="File" size={20} color="white" />
              </Box>
              <Box xs={10} pl={3}>
                <Text>Pagar boleto</Text>
              </Box>
              <Box xs={1} pl={4}>
                <Icon name="CaretRight" size={20} color="blue" />
              </Box>
            </Grid>
            <Divider mt={3} />
          </Card>

          <Text mt={4} mb={4} bold>
            ÚLTIMAS TRANSAÇÕES
          </Text>

          <Card w={420} h={70}>
            <Grid center>
              <Box ml={-4} xs={2} ww={35} hh={35} p={2} borderRadius={100} bg="lightPurple">
                <Icon name="House" size={20} color="black" />
              </Box>
              <Box xs={8} pl={3}>
                <Text variant="title">CEB DISTRIBUICAO S.A</Text>
                <Text variant="caption" color="darkGrey">
                  02/08/2023 - 20:22
                </Text>
              </Box>
              <Box row ml={4}>
                <Text variant="subtitle">- R$ </Text>
                <Text bold variant="title">
                  99,90
                </Text>
              </Box>
            </Grid>
          </Card>

          <Card w={420} h={70} mt={-4}>
            <Grid center>
              <Box ml={-4} xs={2} ww={35} hh={35} p={2} borderRadius={100} bg="lightPurple">
                <Icon name="House" size={20} color="black" />
              </Box>
              <Box xs={8} pl={3}>
                <Text variant="title">CAESB DISTRIBUICAO S.A</Text>
                <Text variant="caption" color="darkGrey">
                  02/08/2023 - 20:22
                </Text>
              </Box>
              <Box row ml={4}>
                <Text variant="subtitle">- R$ </Text>
                <Text bold variant="title">
                  68,72
                </Text>
              </Box>
            </Grid>
          </Card>

          <Box center>
            <Text mt={4} mb={1} bold color="blue">
              Ver extrato geral
            </Text>
          </Box>
        </Card>
      </Scrollable>
    </>
  );
}
