# api.aikoda.dev - API Documentation

## Hero Section
**Headline:** Build with Cultural Intelligence  
**Subheadline:** RESTful API for seamless integration of 47D cultural analysis into your applications  
**CTAs:** Get API Key | View Documentation

---

## Section 1: Getting Started

### Authentication
```bash
curl -X POST https://api.aikoda.dev/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Base URL
```
https://api.aikoda.dev/v1
```

### Rate Limits
- **Standard:** 1,000 requests/hour
- **Growth:** 10,000 requests/hour
- **Enterprise:** Unlimited

---

## Section 2: Core Endpoints

### Assessment API

**Create Assessment**
```http
POST /assessments
```
```json
{
  "candidate_email": "candidate@example.com",
  "job_role": "software_engineer",
  "company_culture_id": "culture_123",
  "language": "en",
  "deadline": "2024-01-15T00:00:00Z"
}
```

**Get Assessment Results**
```http
GET /assessments/{assessment_id}
```
```json
{
  "assessment_id": "asmt_abc123",
  "status": "completed",
  "cultural_fit_score": 87,
  "dimensions": {
    "communication": {
      "direct_indirect": 73,
      "formal_informal": 45,
      ...
    },
    ...
  },
  "recommendations": [...]
}
```

### Analysis API

**Analyze Resume**
```http
POST /analysis/resume
```
```json
{
  "resume_url": "https://example.com/resume.pdf",
  "job_description": "...",
  "target_culture": "culture_123"
}
```

**Batch Analysis**
```http
POST /analysis/batch
```
```json
{
  "candidates": [
    {"email": "...", "resume_url": "..."},
    ...
  ],
  "job_role": "...",
  "callback_url": "https://yourapp.com/webhook"
}
```

### Team API

**Optimize Team Composition**
```http
POST /teams/optimize
```
```json
{
  "current_members": ["user_1", "user_2"],
  "candidates": ["cand_1", "cand_2", "cand_3"],
  "optimization_goal": "productivity"
}
```

---

## Section 3: Webhooks

### Event Types
- `assessment.completed`
- `assessment.expired`
- `batch.processed`
- `team.analyzed`
- `integration.error`

### Webhook Payload
```json
{
  "event": "assessment.completed",
  "created": "2024-01-10T10:00:00Z",
  "data": {
    "assessment_id": "asmt_abc123",
    "candidate_id": "cand_xyz789",
    "score": 87
  }
}
```

### Security
- HMAC-SHA256 signatures
- Replay attack prevention
- IP allowlisting available

---

## Section 4: SDKs & Libraries

### Official SDKs
**JavaScript/TypeScript**
```bash
npm install @aikoda/sdk
```
```javascript
import { AikodaClient } from '@aikoda/sdk';

const client = new AikodaClient({
  apiKey: 'your_api_key'
});

const assessment = await client.assessments.create({
  candidateEmail: 'candidate@example.com',
  jobRole: 'software_engineer'
});
```

**Python**
```bash
pip install aikoda
```
```python
from aikoda import Client

client = Client(api_key='your_api_key')

assessment = client.assessments.create(
    candidate_email='candidate@example.com',
    job_role='software_engineer'
)
```

**Additional SDKs**
- Java
- Ruby
- PHP
- Go
- .NET

---

## Section 5: Use Cases

### ATS Integration
```javascript
// Greenhouse webhook handler
app.post('/greenhouse-webhook', async (req, res) => {
  const { candidate } = req.body;
  
  const assessment = await aikoda.assessments.create({
    candidateEmail: candidate.email,
    metadata: {
      greenhouse_id: candidate.id
    }
  });
  
  res.json({ assessment_url: assessment.url });
});
```

### Bulk Screening
```python
# Process CSV of candidates
import pandas as pd

df = pd.read_csv('candidates.csv')
batch = client.analysis.create_batch(
    candidates=df.to_dict('records'),
    callback_url='https://yourapp.com/results'
)
```

### Real-time Scoring
```javascript
// Live scoring during video interview
const streamAnalysis = client.streaming.create({
  sessionId: interview.id,
  culturalMarkers: ['communication', 'leadership']
});

streamAnalysis.on('data', (scores) => {
  updateDashboard(scores);
});
```

---

## Section 6: Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "invalid_request",
    "message": "Missing required field: candidate_email",
    "field": "candidate_email",
    "request_id": "req_abc123"
  }
}
```

### Common Error Codes
- `401` - Invalid authentication
- `403` - Insufficient permissions
- `404` - Resource not found
- `429` - Rate limit exceeded
- `500` - Internal server error

---

## Section 7: API Reference

### Resources
- **Assessments** - Individual cultural assessments
- **Analysis** - Resume and profile analysis
- **Teams** - Team composition optimization
- **Cultures** - Company culture profiles
- **Reports** - Analytics and insights
- **Webhooks** - Event subscriptions
- **Account** - Usage and billing

### Testing
**Sandbox Environment**
```
https://sandbox-api.aikoda.dev/v1
```

Test API keys available in client portal

---

## Bottom CTA Section
**Headline:** Ready to Integrate Cultural Intelligence?  
**Subheadline:** Join developers building the future of intelligent hiring  
**CTAs:** Get API Access | Join Developer Community

---

## Navigation
**Header:** Documentation | API Reference | SDKs | Examples | Support | Status | Changelog  
**Footer:** API Status | Developer Forum | GitHub | Support | Terms