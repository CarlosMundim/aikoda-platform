'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../../components/LanguageProvider';
import { LanguageToggle } from '../../../components/LanguageToggle';

// Common technical skills categories
const SKILL_CATEGORIES = [
  {
    category: 'programming',
    label: 'プログラミング言語',
    labelEn: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 0 },
      { name: 'TypeScript', level: 0 },
      { name: 'Python', level: 0 },
      { name: 'Java', level: 0 },
      { name: 'C#', level: 0 },
      { name: 'Go', level: 0 },
      { name: 'Ruby', level: 0 },
      { name: 'PHP', level: 0 },
      { name: 'Swift', level: 0 },
      { name: 'Kotlin', level: 0 }
    ]
  },
  {
    category: 'frameworks',
    label: 'フレームワーク',
    labelEn: 'Frameworks',
    skills: [
      { name: 'React', level: 0 },
      { name: 'Vue.js', level: 0 },
      { name: 'Angular', level: 0 },
      { name: 'Next.js', level: 0 },
      { name: 'Node.js', level: 0 },
      { name: 'Django', level: 0 },
      { name: 'Spring', level: 0 },
      { name: '.NET', level: 0 },
      { name: 'Laravel', level: 0 },
      { name: 'Express', level: 0 }
    ]
  },
  {
    category: 'business',
    label: 'ビジネススキル',
    labelEn: 'Business Skills',
    skills: [
      { name: 'Project Management', level: 0 },
      { name: 'Business Analysis', level: 0 },
      { name: 'Strategic Planning', level: 0 },
      { name: 'Financial Analysis', level: 0 },
      { name: 'Marketing', level: 0 },
      { name: 'Sales', level: 0 },
      { name: 'Customer Service', level: 0 },
      { name: 'Presentation', level: 0 }
    ]
  },
  {
    category: 'languages',
    label: '言語能力',
    labelEn: 'Language Skills',
    skills: [
      { name: 'Japanese (日本語)', level: 0 },
      { name: 'English', level: 0 },
      { name: 'Chinese (中文)', level: 0 },
      { name: 'Korean (한국어)', level: 0 },
      { name: 'Spanish', level: 0 },
      { name: 'French', level: 0 },
      { name: 'German', level: 0 }
    ]
  }
];

export default function CandidateSkills() {
  const router = useRouter();
  const { language } = useLanguage();
  const [skillsData, setSkillsData] = useState(SKILL_CATEGORIES);

  const handleSkillLevelChange = (categoryIndex: number, skillIndex: number, level: number) => {
    const newSkillsData = [...skillsData];
    newSkillsData[categoryIndex].skills[skillIndex].level = level;
    setSkillsData(newSkillsData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save skills data
    const selectedSkills = skillsData.flatMap(category => 
      category.skills.filter(skill => skill.level > 0)
        .map(skill => ({ ...skill, category: category.category }))
    );
    localStorage.setItem('candidateSkills', JSON.stringify(selectedSkills));
    // Navigate to dashboard or confirmation page
    router.push('/candidate/dashboard');
  };

  const getSkillLevelLabel = (level: number) => {
    const labels = language === 'ja' 
      ? ['未選択', '初級', '中級', '上級', 'エキスパート']
      : ['Not Selected', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
    return labels[level];
  };

  const getSkillLevelColor = (level: number) => {
    const colors = ['bg-gray-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200'];
    return colors[level];
  };

  return (
    <div className="container min-h-screen bg-gray-50">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {language === 'ja' ? 'スキル選択' : 'Skills Selection'}
            </h1>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'ja' ? 'スキルと専門知識' : 'Skills & Expertise'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'ja' 
              ? '各スキルのレベルを選択してください（1: 初級、4: エキスパート）'
              : 'Select your proficiency level for each skill (1: Beginner, 4: Expert)'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {skillsData.map((category, categoryIndex) => (
              <div key={category.category} className="border-b border-gray-200 pb-8 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'ja' ? category.label : category.labelEn}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        {[0, 1, 2, 3, 4].map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => handleSkillLevelChange(categoryIndex, skillIndex, level)}
                            className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                              skill.level === level
                                ? level === 0 
                                  ? 'bg-gray-400 text-white' 
                                  : `${getSkillLevelColor(level)} text-gray-900 ring-2 ring-offset-2 ring-gray-400`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                            title={getSkillLevelLabel(level)}
                          >
                            {level === 0 ? '-' : level}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Custom Skills Addition */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ja' ? 'その他のスキル' : 'Additional Skills'}
              </h3>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder={language === 'ja' 
                  ? 'その他のスキルや資格をここに記入してください...' 
                  : 'Enter any additional skills or certifications here...'}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {language === 'ja' 
                  ? '選択したスキル: ' + skillsData.flatMap(c => c.skills).filter(s => s.level > 0).length + '個'
                  : 'Selected skills: ' + skillsData.flatMap(c => c.skills).filter(s => s.level > 0).length}
              </p>
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                {language === 'ja' ? '登録を完了' : 'Complete Registration'}
              </button>
            </div>
          </form>
        </div>
      </main>
      
      {/* HOME Button - Bottom */}
      <div className="mt-8 text-center">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
    </div>
  );
}