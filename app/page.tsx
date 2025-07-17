export default function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#1e40af',
          marginBottom: '10px'
        }}>
          🤖 aiKODA Market Intelligence Platform
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6b7280',
          marginBottom: '30px'
        }}>
          Advanced AI-Powered Market Intelligence & Cultural Assessment Platform
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            color: '#1e40af',
            marginBottom: '15px'
          }}>
            🇯🇵 Japan Market Intelligence
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>
            820,000 skilled foreign workers expected by 2025
          </p>
          <a 
            href="/dashboard/market-intelligence" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#1e40af',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            View Dashboard
          </a>
        </div>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            color: '#1e40af',
            marginBottom: '15px'
          }}>
            🇮🇩 Indonesia Market Intelligence
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>
            76% of workers use AI daily - leading Asia Pacific
          </p>
          <a 
            href="/dashboard/market-intelligence" 
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#1e40af',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            View Dashboard
          </a>
        </div>
      </div>
      
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#1e40af',
          marginBottom: '20px'
        }}>
          🐯 Ready for Your Brexa Meeting
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#6b7280',
          marginBottom: '20px'
        }}>
          Professional Market Intelligence Dashboard with Real Data from OECD, PwC, and TokyoDev
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/dashboard/market-intelligence" 
            style={{
              padding: '15px 30px',
              background: '#dc2626',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            🚀 Launch Dashboard
          </a>
          <a 
            href="/candidate/auth" 
            style={{
              padding: '15px 30px',
              background: '#7c3aed',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            👥 Candidate Portal
          </a>
          <a 
            href="/client/auth" 
            style={{
              padding: '15px 30px',
              background: '#059669',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            🏢 Enterprise Portal
          </a>
        </div>
      </div>
    </div>
  )
}