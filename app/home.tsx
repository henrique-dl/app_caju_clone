import { Box, Card, Grid, Scrollable, Text } from '@react-bulk/native';

export default function Page() {
  return (
    <>
      <Scrollable bg="#fff" contentInset={3}>
        <Card>
          <Grid>
            <Text variant="h2">
              Oi, <Text bold> Henrique</Text>
            </Text>
          </Grid>
        </Card>
      </Scrollable>
    </>
  );
}
