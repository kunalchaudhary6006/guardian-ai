import { Kafka} from 'kafkajs';

const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKERS!],
});

const producer = kafka.producer();

export async function sendMessage(topic: string, messages: any[]) {
  await producer.connect();
  await producer.send({
    topic,
    messages,
  });
  await producer.disconnect();
}