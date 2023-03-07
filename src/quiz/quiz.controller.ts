import { Body, Controller, Get, Post } from '@nestjs/common';
import LatestQuizResponse from './dtos/latest-quiz-response.dto';
import SubmitQuizDto from './dtos/submit-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get()
  getQuiz(): LatestQuizResponse {
    return this.quizService.getQuiz();
  }

  @Post('/:quizId/submit')
  submitQuiz(@Body() submitQuizDto: SubmitQuizDto) {
    return this.quizService.submitQuiz(submitQuizDto);
  }
}
