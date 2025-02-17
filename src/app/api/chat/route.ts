import {streamText} from 'ai';
import {createOllama} from 'ollama-ai-provider';

const ollama = createOllama();

const model = ollama("qwen2.5-coder:14b")

export async function POST(req: Request) {
	const {messages} = await req.json();

	const result = streamText({
		model: model,
		messages,
	});

	return result.toDataStreamResponse();
}
