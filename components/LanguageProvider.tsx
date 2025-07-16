'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.enterprise': 'Enterprise',
    'nav.resources': 'Resources',
    'nav.signin': 'Sign In',
    'nav.getstarted': 'Get Started',
    
    // Dashboard
    'dashboard.title': 'AIKODA Dashboard',
    'dashboard.subtitle': 'Cultural Intelligence Platform',
    'dashboard.candidateRegistration': 'Candidate Registration',
    'dashboard.companyRegistration': 'Company Registration',
    'dashboard.culturalAssessment': 'Cultural Intelligence Assessment',
    'dashboard.analytics': 'Analytics & Reports',
    'dashboard.marketIntelligence': 'Market Intelligence',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.systemStatus': 'System Status',
    'dashboard.realTimeAlerts': 'Real-Time Alerts',
    
    // Buttons
    'button.submit': 'Submit',
    'button.cancel': 'Cancel',
    'button.save': 'Save',
    'button.edit': 'Edit',
    'button.delete': 'Delete',
    'button.view': 'View',
    'button.download': 'Download',
    'button.export': 'Export',
    'button.refresh': 'Refresh',
    'button.search': 'Search',
    'button.filter': 'Filter',
    'button.reset': 'Reset',
    'button.next': 'Next',
    'button.previous': 'Previous',
    'button.close': 'Close',
    
    // Forms
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.company': 'Company',
    'form.position': 'Position',
    'form.experience': 'Experience',
    'form.skills': 'Skills',
    'form.languages': 'Languages',
    'form.location': 'Location',
    'form.salary': 'Salary Expectation',
    'form.availability': 'Availability',
    
    // Status
    'status.active': 'Active',
    'status.inactive': 'Inactive',
    'status.pending': 'Pending',
    'status.completed': 'Completed',
    'status.approved': 'Approved',
    'status.rejected': 'Rejected',
    'status.processing': 'Processing',
    
    // Data Labels
    'data.totalCandidates': 'Total Candidates',
    'data.totalCompanies': 'Total Companies',
    'data.activeMatches': 'Active Matches',
    'data.activeAssessments': 'Active Assessments',
    'data.successfulPlacements': 'Successful Placements',
    'data.culturalScore': 'Cultural Intelligence Score',
    'data.matchingAccuracy': 'Matching Accuracy',
    'data.responseTime': 'Average Response Time',
    'data.satisfaction': 'Satisfaction Rate',
    
    // Cultural Dimensions
    'cultural.communicationStyle': 'Communication Style',
    'cultural.hierarchyRespect': 'Hierarchy Respect',
    'cultural.decisionMaking': 'Decision Making',
    'cultural.timeOrientation': 'Time Orientation',
    'cultural.relationshipBuilding': 'Relationship Building',
    'cultural.conflictResolution': 'Conflict Resolution',
    'cultural.workLifeBalance': 'Work-Life Balance',
    'cultural.innovation': 'Innovation Approach',
    
    // Reports
    'report.culturalMatchingReport': 'Cultural Matching Report',
    'report.candidateAnalytics': 'Candidate Analytics',
    'report.companyPreferences': 'Company Preferences',
    'report.marketTrends': 'Market Trends',
    'report.performanceMetrics': 'Performance Metrics',
    'report.downloadPDF': 'Download PDF Report',
    'report.exportCSV': 'Export CSV Data',
    
    // Messages
    'message.success': 'Operation completed successfully',
    'message.error': 'An error occurred',
    'message.loading': 'Loading...',
    'message.noData': 'No data available',
    'message.saveSuccess': 'Data saved successfully',
    'message.deleteConfirm': 'Are you sure you want to delete this item?',
  },
  ja: {
    // Navigation
    'nav.platform': 'プラットフォーム',
    'nav.solutions': 'ソリューション',
    'nav.enterprise': 'エンタープライズ',
    'nav.resources': 'リソース',
    'nav.signin': 'サインイン',
    'nav.getstarted': '始める',
    
    // Dashboard
    'dashboard.title': 'AIKODA ダッシュボード',
    'dashboard.subtitle': '文化的知能プラットフォーム',
    'dashboard.candidateRegistration': '候補者登録',
    'dashboard.companyRegistration': '企業登録',
    'dashboard.culturalAssessment': '文化的知能評価',
    'dashboard.analytics': '分析・レポート',
    'dashboard.marketIntelligence': '市場情報',
    'dashboard.recentActivity': '最近の活動',
    'dashboard.systemStatus': 'システム状態',
    'dashboard.realTimeAlerts': 'リアルタイムアラート',
    
    // Buttons
    'button.submit': '送信',
    'button.cancel': 'キャンセル',
    'button.save': '保存',
    'button.edit': '編集',
    'button.delete': '削除',
    'button.view': '表示',
    'button.download': 'ダウンロード',
    'button.export': 'エクスポート',
    'button.refresh': '更新',
    'button.search': '検索',
    'button.filter': 'フィルター',
    'button.reset': 'リセット',
    'button.next': '次へ',
    'button.previous': '前へ',
    'button.close': '閉じる',
    
    // Forms
    'form.firstName': '名',
    'form.lastName': '姓',
    'form.email': 'メールアドレス',
    'form.phone': '電話番号',
    'form.company': '会社名',
    'form.position': '職位',
    'form.experience': '経験',
    'form.skills': 'スキル',
    'form.languages': '言語',
    'form.location': '場所',
    'form.salary': '希望給与',
    'form.availability': '勤務可能日',
    
    // Status
    'status.active': 'アクティブ',
    'status.inactive': '非アクティブ',
    'status.pending': '保留中',
    'status.completed': '完了',
    'status.approved': '承認済み',
    'status.rejected': '却下',
    'status.processing': '処理中',
    
    // Data Labels
    'data.totalCandidates': '総候補者数',
    'data.totalCompanies': '総企業数',
    'data.activeMatches': 'アクティブマッチ',
    'data.activeAssessments': 'アクティブ評価',
    'data.successfulPlacements': '成功配置数',
    'data.culturalScore': '文化的知能スコア',
    'data.matchingAccuracy': 'マッチング精度',
    'data.responseTime': '平均応答時間',
    'data.satisfaction': '満足度',
    
    // Cultural Dimensions
    'cultural.communicationStyle': 'コミュニケーションスタイル',
    'cultural.hierarchyRespect': '階層の尊重',
    'cultural.decisionMaking': '意思決定',
    'cultural.timeOrientation': '時間志向',
    'cultural.relationshipBuilding': '関係構築',
    'cultural.conflictResolution': '紛争解決',
    'cultural.workLifeBalance': 'ワークライフバランス',
    'cultural.innovation': 'イノベーションアプローチ',
    
    // Reports
    'report.culturalMatchingReport': '文化的マッチングレポート',
    'report.candidateAnalytics': '候補者分析',
    'report.companyPreferences': '企業設定',
    'report.marketTrends': '市場動向',
    'report.performanceMetrics': 'パフォーマンス指標',
    'report.downloadPDF': 'PDFレポートダウンロード',
    'report.exportCSV': 'CSVデータエクスポート',
    
    // Messages
    'message.success': '操作が正常に完了しました',
    'message.error': 'エラーが発生しました',
    'message.loading': '読み込み中...',
    'message.noData': 'データがありません',
    'message.saveSuccess': 'データが正常に保存されました',
    'message.deleteConfirm': 'この項目を削除してもよろしいですか？',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};