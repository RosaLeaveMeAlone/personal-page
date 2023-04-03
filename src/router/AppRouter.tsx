import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { HomePage } from '../personal-page/pages'
import { SkillsPage } from '../personal-page/pages/SkillsPage';
import { EducationPage } from '../personal-page/pages/EducationPage';
import { ExperiencePage } from '../personal-page/pages/ExperiencePage';

export const AppRouter = () => {
  return (
    // Home/Personal => Skills => Education => Experience
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
        <Route path='/education' element={<EducationPage/>}/>
        <Route path='/experience' element={<ExperiencePage/>}/>


        <Route path='/*' element={<Navigate to="/"/>}/>
        <Route/>
    </Routes>
  )
}
