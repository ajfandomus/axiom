/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { PROJECTS } from './data/axiomData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { HospitalityPage } from './pages/HospitalityPage';
import { MediaCentrePage } from './pages/MediaCentrePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { InquiryModal } from './components/InquiryModal';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('milestone-residences');
  
  // Modals state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDefaultProject, setInquiryDefaultProject] = useState('');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureProject, setBrochureProject] = useState<Project | null>(null);

  // Synchronize with URL hash on mount and hash changes
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('projects/')) {
        const pId = hash.replace('projects/', '');
        const exists = PROJECTS.some((p) => p.id === pId);
        if (exists) {
          setSelectedProjectId(pId);
          setCurrentPage('project-detail');
          return;
        }
      }

      const validPages: PageId[] = ['home', 'about', 'projects', 'hospitality', 'media', 'faq', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: PageId, projectId?: string) => {
    if (page === 'project-detail' && projectId) {
      setSelectedProjectId(projectId);
      setCurrentPage('project-detail');
      window.location.hash = `projects/${projectId}`;
    } else {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (projectName?: string) => {
    setInquiryDefaultProject(projectName || '');
    setInquiryModalOpen(true);
  };

  const handleOpenBrochure = (project: Project) => {
    setBrochureProject(project);
    setBrochureModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#242624] font-sans antialiased">
      {/* Universal Top Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isHome={currentPage === 'home'}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'project-detail' && (
          <ProjectDetailPage
            projectId={selectedProjectId}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onOpenBrochure={handleOpenBrochure}
          />
        )}

        {currentPage === 'hospitality' && (
          <HospitalityPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'media' && (
          <MediaCentrePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Universal Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultProject={inquiryDefaultProject}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        project={brochureProject}
      />
    </div>
  );
}
