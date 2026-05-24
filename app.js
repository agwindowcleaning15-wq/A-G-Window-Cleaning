document.addEventListener("DOMContentLoaded", () => {
    // Header
    document.getElementById('ui-company-name').textContent = businessData.company.name;
    document.getElementById('ui-company-operators').textContent = `Operated by ${businessData.company.operators}`;
    
    const phoneEl = document.getElementById('ui-company-phone');
    phoneEl.textContent = businessData.company.phone;
    phoneEl.href = `tel:${businessData.company.phoneRaw}`;

    const emailEl = document.getElementById('ui-company-email');
    emailEl.textContent = businessData.company.email;
    emailEl.href = `mailto:${businessData.company.email}`;
    
    // Pricing
    document.getElementById('ui-std-label').textContent = businessData.pricing.standard.label;
    document.getElementById('ui-std-desc').textContent = businessData.pricing.standard.description;
    document.getElementById('ui-std-price').textContent = `$${businessData.pricing.standard.price}`;
    
    document.getElementById('ui-snd-label').textContent = businessData.pricing.secondStory.label;
    document.getElementById('ui-snd-desc').textContent = businessData.pricing.secondStory.description;
    document.getElementById('ui-snd-price').textContent = `$${businessData.pricing.secondStory.price}`;
    
    // Location
    document.getElementById('ui-service-area').textContent = businessData.location.serviceArea;
    
    // Schedule
    document.getElementById('ui-schedule-days').textContent = businessData.schedule.days;
    
    const periodsContainer = document.getElementById('ui-schedule-periods');
    businessData.schedule.periods.forEach(period => {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center text-sm md:text-base border-b border-dashed border-neutral-200 pb-2 group hover:border-blue-300 transition-colors cursor-default";
        
        const dateSpan = document.createElement('span');
        dateSpan.className = "text-neutral-500 group-hover:text-neutral-800 transition-colors";
        dateSpan.textContent = period.dates;
        
        const hoursSpan = document.createElement('span');
        hoursSpan.className = "font-medium group-hover:text-blue-600 transition-colors";
        hoursSpan.textContent = period.hours;
        
        div.appendChild(dateSpan);
        div.appendChild(hoursSpan);
        periodsContainer.appendChild(div);
    });
    
    // Process
    const processContainer = document.getElementById('ui-process');
    businessData.process.forEach((step, idx) => {
        const li = document.createElement('li');
        li.className = "flex gap-4 group cursor-default";
        
        const numSpan = document.createElement('span');
        numSpan.className = "text-neutral-300 font-mono text-sm group-hover:text-blue-600 transition-colors";
        numSpan.textContent = (idx + 1).toString().padStart(2, '0');
        
        const p = document.createElement('p');
        p.className = "text-lg font-light leading-snug text-neutral-600 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all";
        p.textContent = step;
        
        li.appendChild(numSpan);
        li.appendChild(p);
        processContainer.appendChild(li);
    });
    
    // Footer
    document.getElementById('ui-footer-copy').innerHTML = `&copy; ${new Date().getFullYear()} ${businessData.company.name}. Final quotes provided on-site.`;
});
