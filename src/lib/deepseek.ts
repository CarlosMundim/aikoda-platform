import OpenAI from 'openai';

// DeepSeek API client configuration
const createDeepSeekClient = () => {
  if (!process.env.DEEPSEEK_API_KEY && !process.env.OPENAI_API_KEY) {
    console.warn('No API key found for DeepSeek or OpenAI');
    return null;
  }
  
  return new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY,
    baseURL: process.env.DEEPSEEK_API_KEY ? 'https://api.deepseek.com/v1' : undefined,
  });
};

let deepseek: OpenAI | null = null;

export interface CulturalAssessmentInput {
  candidateId: string;
  responses: Array<{
    questionId: string;
    answer: string;
    category: string;
  }>;
  targetCulture: string;
  languages: string[];
}

export interface CulturalAssessmentResult {
  candidateId: string;
  overallScore: number;
  culturalFit: number;
  adaptabilityScore: number;
  communicationStyle: string;
  workStyle: string;
  recommendations: string[];
  strengths: string[];
  developmentAreas: string[];
  culturalDimensions: {
    powerDistance: number;
    individualismCollectivism: number;
    uncertaintyAvoidance: number;
    masculinityFemininity: number;
    longTermOrientation: number;
    indulgenceRestraint: number;
  };
}

export class CulturalIntelligenceEngine {
  
  async assessCulturalFit(input: CulturalAssessmentInput): Promise<CulturalAssessmentResult> {
    if (!deepseek) {
      deepseek = createDeepSeekClient();
    }
    
    if (!deepseek) {
      throw new Error('AI service not available - no API key configured');
    }
    
    const prompt = this.buildCulturalAssessmentPrompt(input);
    
    try {
      const completion = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: `You are an expert cultural intelligence analyst specializing in cross-cultural workplace assessment. 
            You analyze candidate responses to determine cultural fit, communication styles, and adaptation potential.
            Return ONLY valid JSON matching the CulturalAssessmentResult interface.`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      });

      const result = completion.choices[0]?.message?.content;
      if (!result) {
        throw new Error('No response from DeepSeek API');
      }

      return JSON.parse(result) as CulturalAssessmentResult;
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      throw new Error('Failed to process cultural assessment');
    }
  }

  private buildCulturalAssessmentPrompt(input: CulturalAssessmentInput): string {
    const responseText = input.responses
      .map(r => `Q: ${r.questionId} (${r.category})\nA: ${r.answer}`)
      .join('\n\n');

    return `
Analyze the following candidate responses for cultural fit assessment:

TARGET CULTURE: ${input.targetCulture}
CANDIDATE ID: ${input.candidateId}
LANGUAGES: ${input.languages.join(', ')}

RESPONSES:
${responseText}

Provide a comprehensive cultural intelligence analysis including:
1. Overall cultural fit score (0-100)
2. Adaptability assessment (0-100)
3. Communication style classification
4. Work style preferences
5. Specific recommendations for integration
6. Key strengths for this cultural context
7. Development areas to focus on
8. Hofstede cultural dimensions scores (0-100 each)

Return as JSON matching this exact structure:
{
  "candidateId": "${input.candidateId}",
  "overallScore": number,
  "culturalFit": number,
  "adaptabilityScore": number,
  "communicationStyle": "string",
  "workStyle": "string",
  "recommendations": ["string array"],
  "strengths": ["string array"],
  "developmentAreas": ["string array"],
  "culturalDimensions": {
    "powerDistance": number,
    "individualismCollectivism": number,
    "uncertaintyAvoidance": number,
    "masculinityFemininity": number,
    "longTermOrientation": number,
    "indulgenceRestraint": number
  }
}`;
  }

  async generateCulturalInsights(culturalProfile: string, targetMarket: string): Promise<string[]> {
    if (!deepseek) {
      deepseek = createDeepSeekClient();
    }
    
    if (!deepseek) {
      throw new Error('AI service not available - no API key configured');
    }
    
    try {
      const completion = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a cultural intelligence expert. Generate actionable insights for workplace integration."
          },
          {
            role: "user",
            content: `Based on this cultural profile: ${culturalProfile}, 
            provide 5 specific insights for success in ${targetMarket} business environment.
            Return as JSON array of strings.`
          }
        ],
        temperature: 0.5,
        max_tokens: 1000,
      });

      const result = completion.choices[0]?.message?.content;
      return result ? JSON.parse(result) : [];
    } catch (error) {
      console.error('Cultural Insights Error:', error);
      return [];
    }
  }

  async validateApiKey(): Promise<boolean> {
    if (!deepseek) {
      deepseek = createDeepSeekClient();
    }
    
    if (!deepseek) {
      return false;
    }
    
    try {
      const completion = await deepseek.chat.completions.create({
        model: "deepseek-chat",
        messages: [{ role: "user", content: "Test connection" }],
        max_tokens: 10,
      });
      return completion.choices.length > 0;
    } catch (error) {
      console.error('API Key Validation Failed:', error);
      return false;
    }
  }
}

export const culturalAI = new CulturalIntelligenceEngine();