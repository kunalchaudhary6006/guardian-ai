import amqp from 'amqplib';

let channel: any;

export async function startConsumer(queue: string) {
  const connection = await amqp.connect(process.env.RABBITMQ_URL!);
  channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    if (msg) {
      const content = msg.content.toString();
      // Process message
      console.log('Processed:', content);
      channel.ack(msg);
    }
  }, { noAck: false });
}