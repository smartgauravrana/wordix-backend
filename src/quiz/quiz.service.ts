import { Injectable } from '@nestjs/common';
import LatestQuizResponse from './dtos/latest-quiz-response.dto';
import SubmitQuizDto from './dtos/submit-quiz.dto';

@Injectable()
export class QuizService {
  getQuiz(): LatestQuizResponse {
    return {
      id: 'xsad',
      words: ['mat', 'bell', 'steps'],
    };
  }

  submitQuiz(submitQuizDto: SubmitQuizDto) {
    if (submitQuizDto.answer === 'door') {
      return { isPassed: true };
    }
    return { isPassed: false };
  }
}
