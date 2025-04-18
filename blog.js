document.addEventListener('DOMContentLoaded', function() {
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            title: "Smart Structuring: Buy in Your Name, Operate Through a Company",
            date: "15 April 2025",
            image: "Assets/InvestmentStructure.jpg",
            author: "MPG Team",
            content: `
                <p>One of the biggest decisions for a new property investor is: "Should I buy the property in my personal name or through a company?"</p>
                
                <p>While many understand the long-term benefits of company ownership (asset protection, tax planning, estate structuring), the reality is that banks are often more willing to finance individuals, especially if you're just starting out.</p>
                
                <p>But what if you could enjoy both the financing advantage of personal ownership and the operational power of a company? This blog explores a beginner-friendly hybrid strategy for new investors.</p>

                <h3>Step 1: Buy the Property in Your Name</h3>
                <p>Purchasing the property in your personal capacity has clear advantages:</p>
                <ul>
                    <li>Easier access to bank finance</li>
                    <li>Lower bond registration costs and better interest rates</li>
                    <li>Immediate access to personal tax benefits, including:
                        <ul>
                            <li>Bond interest deductions</li>
                            <li>Wear & tear (Section 11(e)) on the property</li>
                            <li>Operating expenses (maintenance, rates, insurance)</li>
                            <li>Section 11(a) deductions related to generating rental income</li>
                        </ul>
                    </li>
                </ul>
                
                <h3>Step 2: Set Up a Company from the Start</h3>
                <p>Even though the property is registered under your name, set up your investment company early. This company will:</p>
                <ul>
                    <li>Lease the property from you (the individual)</li>
                    <li>Handle all trading operations, including rent collection, maintenance, and admin</li>
                    <li>Pay you rent (equal or close to your bond repayment amount)</li>
                </ul>
                <p>This allows: </p>
                <li>You (the individual) to keep all the tax benefits of ownership</li>
                <li>The company to claim business expenses and build a financial track record</li>
                <li>A clean structure for future transfers or partnerships</li>
                
                <h3>Step 3: Refinance and Transfer Later</h3>
                <p>Once the property has appreciated in value or you've made improvements, you can:</p>
                <ul>
                    <li>Refinance the property at a higher valuation under the company's name</li>
                    <li>Use the refinance proceeds to buy the property from yourself and cover:
                        <ul>
                            <li>Bond settlement</li>
                            <li>Transfer costs</li>
                            <li>Capital Gains Tax (CGT)</li>
                        </ul>
                    </li>
                </ul>
                <p>Capital Gains Tax can be managed through smart planning:</p>
                <ul>
                    <li>Deferral – Only payable when the property is actually sold</li>
                    <li>R40,000 annual CGT exclusion – Reduces taxable capital gain</li>
                    <li>Primary Residence Relief – If you lived in the property, up to R2 million of the gain may be tax-free</li>
                </ul>

                <h3>Why this strategy works</h3>
                <ul>
                    <li>You benefit from the easier bond qualification and rates available to individuals</li>
                    <li>You build your company early and begin running all operations at that level</li>
                    <li>You keep personal tax deductions while the company still claims trading expenses</li>
                    <li>You create a clean path for long-term structuring when your portfolio is more mature</li>
                </ul>

                <h3>Final Thoughts</h3>
                <p>If you're new to investing, don’t worry about having the perfect structure from day one. Instead, start with what gives you access to finance and flexibility — then evolve your structure as your portfolio grows.</p>

                <p>At Max Properties Growth, we help investors:</p>
                <ul>
                    <li>Choose smart ownership strategies from day one</li>
                    <li>Set up compliant and future-ready company structures</li>
                    <li>Plan for refinancing and long-term tax-smart transitions</li>
                    <li>You create a clean path for long-term structuring when your portfolio is more mature</li>
                </ul>

                <h3>Work With Max Properties Growth</h3>
                <p>At Max Properties Growth, we specialize in helping investors navigate every stage of the property investment journey — from initial deal structuring to refinancing, tax strategy, and long-term wealth planning.</p>

                <p>Whether you're just getting started or looking to scale with smart systems, our team provides:</p>
                <ul>
                    <li>Personalised consultation and strategic advice</li>
                    <li>Financial modeling and tax planning support</li>
                    <li>Company setup guidance and investor coaching</li>
                </ul>            `
        },
        {
            id: 2,
            title: "Why Property is Real Security — And a Job Isn't",
            date: "15 April 2025",
            image: "Assets/PropertySecurity.jpeg",
            author: "MPG Team",
            content: `
                <p>Many people are raised to believe that a job equals security — get a good qualification, work hard, and climb the ladder. But in reality, that version of security is fragile. Real, lasting wealth often lies in owning income-producing assets like property.</p>
                
                <h3>1. Property Gives You Control — A Job Doesn't</h3>
                <p>With a job, your income depends on decisions beyond your control — retrenchments, demotions, or economic downturns. In property, you make the calls: what to buy, how to renovate, how much to charge in rent, and when to sell.</p>
                
                <h3>2. Skills Die with You — Property Can Be Inherited</h3>
                <p>No matter how skilled or qualified you are, your expertise can't be passed down. But property can. It generates income for your family and can be structured in trusts to ensure continuity for generations.</p>
                
                <h3>3. Property Earns While You Sleep</h3>
                <p>Property grows in value over time and pays rental income regularly. You don't need to work harder to earn more — the asset works for you.</p>
                
                <h3>4. Use Other People's Money</h3>
                <p>Through bonds, partnerships, and refinancing, you can build a portfolio with minimal personal capital. Property lets you leverage other people's money to build your own wealth.</p>
                
                <h3>5. Plan Beyond Your Lifetime with Trusts</h3>
                <p>Trusts allow you to protect assets, control how they are managed, and ensure they serve your family long after you're gone. With trustees acting on your behalf, property can remain a source of wealth for generations.</p>
                
                <h3>6. The Tax Reality: Salary vs Property</h3>
                <p>If you earn a salary, the more you earn, the higher your tax — up to 45%. Worse, you get limited deductions. But a property investor can:</p>
                <ul>
                    <li>Operate via a company taxed at just 27%</li>
                    <li>Claim expenses like interest, maintenance, depreciation (wear and tear)</li>
                    <li>Reduce or eliminate tax legally through structuring</li>
                </ul>

                <p>South Africa’s tax system rewards asset ownership — not just hard work.</p>
                
                <h3>Conclusion</h3>
                <p>A job may feel safe, but it lacks control, generational continuity, and long-term wealth potential. Property, on the other hand, offers freedom, inheritance, passive income, and significant tax advantages. The real security lies in building assets — not clocking hours.</p>
            `
        }
    ];

    // Modal elements
    const modal = document.getElementById('blogModal');
    const modalContent = document.querySelector('.modal-body');
    const closeBtn = document.querySelector('.close-modal');

    // Attach click handlers to all "Read More" links
    document.querySelectorAll('.blog-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = parseInt(this.getAttribute('data-post-id'));
            const post = blogPosts.find(p => p.id === postId);
            
            if (post) {
                modalContent.innerHTML = `
                    <h2>${post.title}</h2>
                    <div class="blog-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-user"></i> ${post.author}</span>
                    </div>
                    <div class="blog-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                    <div class="blog-content">
                        ${post.content}
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});