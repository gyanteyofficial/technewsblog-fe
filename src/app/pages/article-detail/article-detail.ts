import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles.data';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css',
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  article = computed<Article | undefined>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return ARTICLES.find((a) => a.id === id);
  });

  relatedArticles = computed(() => {
    const current = this.article();
    if (!current) return [];
    return ARTICLES.filter(
      (a) => a.category === current.category && a.id !== current.id
    )
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 3);
  });

  goBack() {
    this.router.navigate(['/']);
  }

  getCategoryClass(cat: string): string {
    return cat.toLowerCase().replace(/[^a-z]/g, '');
  }

  getReadingProgress(readTime: number): string {
    return `${readTime} min read`;
  }

  getFullContent(article: Article): string[] {
    const paragraphs: Record<number, string[]> = {
      1: [
        `OpenAI's latest model, GPT-5, has officially launched and is already sending ripples through the AI industry. The company announced the release at its annual developer conference, showcasing capabilities that far surpass its predecessor in several key benchmarks.`,
        `The most striking improvement is in multi-step reasoning. In internal testing, GPT-5 was able to solve complex mathematical proofs, debug intricate codebases, and synthesize research papers with a coherence that earlier models could not achieve. The model can now maintain context across extremely long documents — up to one million tokens — without losing track of prior information.`,
        `Real-time web access is another headline feature. Unlike GPT-4, which operated with a fixed training cutoff, GPT-5 can search the live web mid-conversation, fetch up-to-date data, and cite sources inline. This transforms it from a static knowledge base into a dynamic research assistant.`,
        `Industry analysts are already drawing comparisons to historic technological milestones. "This is the kind of leap that happens once a decade," said Dr. Yoshua Bengio, a Turing Award laureate. "The implications for science, medicine, and education are profound."`,
        `OpenAI has also introduced new safety measures alongside the launch, including improved refusal mechanisms and a public model card detailing known limitations. The company says it conducted an unprecedented red-teaming exercise involving over 500 external researchers.`,
        `Pricing for GPT-5 access starts at $0.005 per 1,000 input tokens, making it competitive with other frontier models. Enterprise tiers with higher rate limits are available immediately.`,
      ],
      5: [
        `SpaceX's Starship vehicle has achieved a milestone that was once considered the stuff of science fiction: a fully reusable spacecraft successfully landing on the surface of the Moon and deploying a scientific payload for NASA.`,
        `The mission, designated Artemis III Cargo Precursor, lifted off from Kennedy Space Center at 03:14 UTC and reached lunar orbit after a 72-hour transit. The landing sequence, executed autonomously by the vehicle's flight computer, placed Starship within 12 meters of its target coordinates near the lunar south pole.`,
        `Once stable on the surface, the vehicle deployed four scientific instruments including a seismometer, a radiation environment monitor, a water-ice drill, and a high-resolution terrain imager. All four instruments reported nominal operations within six hours of landing.`,
        `"This changes the economics of space exploration forever," said NASA Administrator Bill Nelson during a post-landing press conference. "The ability to land large payloads on the Moon and bring the vehicle back for reuse means we can finally think about permanent infrastructure on another world."`,
        `Starship then lifted off from the lunar surface 18 hours later, completing the first crewed-class reusable lander test. The vehicle is scheduled to return to Earth and land at Boca Chica, Texas, where it will be refurbished for its next flight.`,
        `The success comes after three developmental test flights that ended in explosions, each providing critical data that engineers used to refine the vehicle's design. SpaceX CEO Elon Musk called the landing "the most important flight in the history of space exploration."`,
      ],
    };

    return (
      paragraphs[article.id] || [
        `${article.title} represents a significant development in the world of ${article.category.toLowerCase()}.`,
        `Experts in the field have been closely monitoring this story, and early reactions suggest the implications could be far-reaching. Several leading institutions have already begun assessing how this changes their current approaches and strategies.`,
        `"This is exactly the kind of breakthrough we've been anticipating," said one senior researcher who asked not to be named ahead of their organization's official statement. "The timing is significant given recent trends in the sector."`,
        `Analysts point to several factors that made this development possible. Sustained investment over the past three years, combined with recent advances in adjacent fields, created the right conditions for this moment to happen now rather than later.`,
        `The broader community is watching closely to see how established players respond. Some have already signaled they are reevaluating their roadmaps in light of the announcement, while others maintain that their existing plans are sufficient.`,
        `What's certain is that this story is still developing. Over the coming weeks, more technical details are expected to emerge, and the full scope of the impact will become clearer as practitioners begin applying these findings in real-world contexts.`,
      ]
    );
  }
}
