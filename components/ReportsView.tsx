'use client';

import { useState } from 'react';

export default function ReportsView() {
  const [generatingReport, setGeneratingReport] = useState<string | null>(null);

  const reportTypes = [
    {
      id: 'cultural-analytics',
      japanese: '文化分析レポート',
      english: 'Cultural Analytics Report',
      description: '47次元文化分析の詳細レポート / Detailed 47-dimensional cultural analysis',
      icon: '📊',
      estimatedTime: '2-3分 / 2-3 minutes'
    },
    {
      id: 'candidate-insights',
      japanese: '候補者インサイト',
      english: 'Candidate Insights',
      description: '候補者プロファイル・適合性分析 / Candidate profiling & compatibility analysis',
      icon: '👥',
      estimatedTime: '1-2分 / 1-2 minutes'
    },
    {
      id: 'market-intelligence',
      japanese: '市場情報レポート',
      english: 'Market Intelligence Report',
      description: '競合分析・市場動向まとめ / Competitive analysis & market trends',
      icon: '📈',
      estimatedTime: '3-5分 / 3-5 minutes'
    },
    {
      id: 'roi-analysis',
      japanese: 'ROI分析',
      english: 'ROI Analysis',
      description: '投資収益率・コスト削減効果 / Return on investment & cost reduction impact',
      icon: '💰',
      estimatedTime: '2-4分 / 2-4 minutes'
    }
  ];

  const recentReports = [
    {
      name: 'インドネシア候補者分析 / Indonesia Candidate Analysis',
      generated: '2時間前 / 2 hours ago',
      status: 'ready',
      type: 'PDF'
    },
    {
      name: '四半期文化適合レポート / Quarterly Cultural Fit Report',
      generated: '5時間前 / 5 hours ago',
      status: 'ready',
      type: 'PDF'
    },
    {
      name: '競合分析ダッシュボード / Competitive Analysis Dashboard',
      generated: '1日前 / 1 day ago',
      status: 'ready',
      type: 'PDF'
    }
  ];

  const generateReport = async (reportId: string) => {
    setGeneratingReport(reportId);
    
    // Simulate report generation
    setTimeout(() => {
      setGeneratingReport(null);
      // Create mock PDF download
      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCg==';
      link.download = `${reportId}-report.pdf`;
      link.click();
    }, 3000);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <div>レポート生成</div>
          <div className="text-xl text-gray-300">Report Generation</div>
        </h1>
        <p className="text-gray-400">
          高度な分析レポートとインサイトの生成
          <br />
          Advanced Analytics Reports & Insights Generation
        </p>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reportTypes.map((report) => (
          <div key={report.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{report.icon}</div>
              <button
                onClick={() => generateReport(report.id)}
                disabled={generatingReport === report.id}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {generatingReport === report.id ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>生成中 / Generating</span>
                  </div>
                ) : (
                  <span>PDF生成 / Generate PDF</span>
                )}
              </button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{report.japanese}</h3>
              <p className="text-sm text-gray-400">{report.english}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{report.description}</p>
              <div className="text-xs text-blue-400">
                推定時間 / Estimated time: {report.estimatedTime}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">
          <div>最近のレポート</div>
          <div className="text-sm text-gray-400">Recent Reports</div>
        </h3>
        
        <div className="space-y-4">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  PDF
                </div>
                <div>
                  <div className="font-medium text-white">{report.name}</div>
                  <div className="text-sm text-gray-400">
                    生成済み / Generated: {report.generated}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                  準備完了 / Ready
                </span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                  ダウンロード / Download
                </button>
                <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors">
                  プレビュー / Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Templates */}
      <div className="mt-8 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-6 border border-indigo-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <span>📋</span>
          <div>
            <div>カスタムレポートテンプレート</div>
            <div className="text-sm text-indigo-200">Custom Report Templates</div>
          </div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              japanese: 'エグゼクティブサマリー',
              english: 'Executive Summary',
              description: 'C-Level向け要約レポート / C-Level summary reports'
            },
            {
              japanese: '詳細技術分析',
              english: 'Technical Deep Dive',
              description: 'HR専門家向け詳細分析 / Detailed analysis for HR professionals'
            },
            {
              japanese: 'ベンチマーク比較',
              english: 'Benchmark Comparison',
              description: '業界標準との比較分析 / Industry standard comparisons'
            }
          ].map((template, index) => (
            <div key={index} className="bg-black bg-opacity-30 rounded-lg p-4">
              <div className="text-sm font-medium text-indigo-200 mb-2">
                {template.japanese}
              </div>
              <div className="text-xs text-indigo-300 mb-2">
                {template.english}
              </div>
              <div className="text-xs text-gray-300 leading-relaxed">
                {template.description}
              </div>
              <button className="mt-3 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-medium transition-colors">
                テンプレート選択 / Select Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}